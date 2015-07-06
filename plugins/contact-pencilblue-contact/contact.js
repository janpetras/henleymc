
module.exports = function(pb) {
    
    //pb dependencies
    var util = pb.util;
    
    /**
     * Contact Form - A basic Contact Form form plugin.
     * look like.
     *
     * @author Blake Callens <blake@pencilblue.org>
     * @copyright 2015 PencilBlue, LLC
     */
    function ContactForm(){}

    /**
     * Called when the application is being installed for the first time.
     *
     * @param cb A callback that must be called upon completion.  cb(Error, Boolean).
     * The result should be TRUE on success and FALSE on failure
     */
    ContactForm.onInstall = function(cb) {
        var self = this;
        
        var cos = new pb.CustomObjectService();
        cos.loadTypeByName('Contact', function(err, contactType) {
            if (util.isError(err) || contactType) {
                return cb(err, !util.isError(err));
            }
            
            var contactValues = {
                name: 'Contact',
                fields: {
                    name: {
                        field_type: 'text'
                    },
                    course: {
                        field_type: 'text'
                    },
                    company: {
                        field_type: 'text'
                    },
                    address: {
                        field_type: 'text'
                    },
                    phone: {
                        field_type: 'text'
                    },
                    email: {
                        field_type: 'text'
                    },
                    comment: {
                        field_type: 'text'
                    },
                    date: {
                        field_type: 'date'
                    }
                }
            };

            cos.saveType(contactValues, function(err, contactType) {
                cb(err, !util.isError(err));
            });
        });
    };

    /**
     * Called when the application is uninstalling this plugin.  The plugin should
     * make every effort to clean up any plugin-specific DB items or any in function
     * overrides it makes.
     *
     * @param cb A callback that must be called upon completion.  cb(Error, Boolean).
     * The result should be TRUE on success and FALSE on failure
     */
    ContactForm.onUninstall = function(cb) {
      cb(null, true);
    };

    /**
     * Called when the application is starting up. The function is also called at
     * the end of a successful install. It is guaranteed that all core PB services
     * will be available including access to the core DB.
     *
     * @param cb A callback that must be called upon completion.  cb(Error, Boolean).
     * The result should be TRUE on success and FALSE on failure
     */
    ContactForm.onStartup = function(cb) {
      cb(null, true);
    };

    /**
     * Called when the application is gracefully shutting down.  No guarantees are
     * provided for how much time will be provided the plugin to shut down.
     *
     * @param cb A callback that must be called upon completion.  cb(Error, Boolean).
     * The result should be TRUE on success and FALSE on failure
     */
    ContactForm.onShutdown = function(cb) {
      cb(null, true);
    };

    //exports
    return ContactForm;
};
