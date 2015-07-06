/*
    Copyright (C) 2015  PencilBlue, LLC

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

module.exports = function(pb) {
    
    //pb depdencies
    var util = pb.util;
    
    function ContactFormSubmit() {};
    util.inherits(ContactFormSubmit, pb.BaseController);

    ContactFormSubmit.prototype.render = function(cb) {
      var self = this;

      this.getJSONPostParams(function(err, post) {
        var message = self.hasRequiredParams(post, ['name', 'email']);
        if(message) {
          cb({
            code: 400,
            content: pb.BaseController.apiResponse(pb.BaseController.API_ERROR, message)
          });
          return;
        }

        var cos = new pb.CustomObjectService();
        cos.loadTypeByName('Contact', function(err, contactType) {
          if(util.isError(err) || !util.isObject(contactType)) {
            cb({
              code: 400,
              content: pb.BaseController.apiResponse(pb.BaseController.API_ERROR, self.ls.get('INVALID_UID'))
            });
            return;
          }

          var contact = {
            name: post.name + ' (' + util.uniqueId() + ')',
            course: post.course,
            company: post.company,
            address: post.address,
            phone: post.phone,
            email: post.email,
            description: post.company,
            comment: post.comment,
            date: new Date()
          };

          pb.CustomObjectService.formatRawForType(contact, contactType);
          var customObjectDocument = pb.DocumentCreator.create('custom_object', contact);

          cos.save(customObjectDocument, contactType, function(err, result) {
            if(util.isError(err)) {
              return cb({
                code: 500,
                content: pb.BaseController.apiResponse(pb.BaseController.API_ERROR, self.ls.get('ERROR_SAVING'))
              });
            }
            else if(util.isArray(result) && result.length > 0) {
              return cb({
                code: 500,
                content: pb.BaseController.apiResponse(pb.BaseController.API_ERROR, self.ls.get('ERROR_SAVING'))
              });
            }

            cb({content: pb.BaseController.apiResponse(pb.BaseController.API_SUCCESS, 'contact submitted')});
          });
        });
      });
    };

    ContactFormSubmit.getRoutes = function(cb) {
      var routes = [
        {
          method: 'post',
          path: '/api/contact/pb_contact_submit_contact',
          auth_required: false,
          content_type: 'application/json'
        }
      ];
      cb(null, routes);
    };

    //exports
    return ContactFormSubmit;
};
