
module.exports = function PortfolioModule(pb) {

    /**
     * Henley - A Henley site theme for Henley Management Centre
     *
     * @author Blake Callens <contact@ianpetras.com>
     * @copyright 2015 Ian Petras
     */
    function Portfolio(){}

    /**
     * Called when the application is being installed for the first time.
     *
     * @param cb A callback that must be called upon completion.  cb(err, result).
     * The result is ignored
     */
    Portfolio.onInstall = function(cb) {
        cb(null, true);
    };

    /**
     * Called when the application is uninstalling this plugin.  The plugin should
     * make every effort to clean up any plugin-specific DB items or any in function
     * overrides it makes.
     *
     * @param cb A callback that must be called upon completion.  cb(err, result).
     * The result is ignored
     */
    Portfolio.onUninstall = function(cb) {
        cb(null, true);
    };

    /**
     * Called when the application is starting up. The function is also called at
     * the end of a successful install. It is guaranteed that all core PB services
     * will be available including access to the core DB.
     *
     * @param cb A callback that must be called upon completion.  cb(err, result).
     * The result is ignored
     */
    Portfolio.onStartup = function(cb) {
        pb.AdminSubnavService.registerFor('plugin_settings', function(navKey, localization, data) {
            if(data.plugin.uid === 'portfolio') {
                return [
                    {
                        name: 'home_page_settings',
                        title: 'Home page settings',
                        icon: 'home',
                        href: '/admin/plugins/portfolio/settings/home_page'
                    }
                ];
            }
            return [];
        });
        cb(null, true);
    };

    /**
     * Called when the application is gracefully shutting down.  No guarantees are
     * provided for how much time will be provided the plugin to shut down.
     *
     * @param cb A callback that must be called upon completion.  cb(err, result).
     * The result is ignored
     */
    Portfolio.onShutdown = function(cb) {
        cb(null, true);
    };

    //exports
    return Portfolio;
};
