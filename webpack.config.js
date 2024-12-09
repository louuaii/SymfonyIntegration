const Encore = require('@symfony/webpack-encore');
const webpack = require('webpack');

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')

    // BackOffice (BO)
    .addStyleEntry('bo-styles',[ 
        './assets/styles/BO/css/sb-admin-2.min.css',
        '/assets/styles/BO/vendor/fontawesome-free/css/all.min.css'
    ])
    .addStyleEntry('global', './assets/styles/app.scss') 
    .addEntry('user-form', './assets/js/user-form.js')
    .addEntry('stat', './assets/js/stat.js')
    .addEntry('app', '/assets/js/app.js')
    .addEntry('bo-scripts', [
        './assets/styles/BO/vendor/jquery/jquery.min.js',
        './assets/styles/BO/vendor/bootstrap/js/bootstrap.bundle.min.js',
        './assets/styles/BO/vendor/jquery-easing/jquery.easing.min.js',
        './assets/styles/BO/js/sb-admin-2.min.js',
    ])
    .addEntry('bo-charts', [
        './assets/styles/BO/vendor/chart.js/Chart.min.js',
        './assets/styles/BO/js/demo/chart-area-demo.js',
        './assets/styles/BO/js/demo/chart-pie-demo.js',
    ])
    .copyFiles({
        from: './assets/styles/BO/img',
        to: 'images/[path][name].[ext]',
    })
    .copyFiles({
        from: './assets/styles/BO/vendor/fontawesome-free/webfonts',
        to: 'webfonts/[path][name].[ext]',
    })

    .addStyleEntry('fo-styles', [
        './assets/styles/FO/css/bootstrap.min.css',
        './assets/styles/FO/css/boxicon.min.css',
        './assets/styles/FO/css/custom.css',
        './assets/styles/FO/css/templatemo.css',
    ])
    .addEntry('fo-scripts', [
        './assets/styles/FO/js/jquery.min.js',
        './assets/styles/FO/js/bootstrap.bundle.min.js',
        './assets/styles/FO/js/custom.js',
        './assets/styles/FO/js/templatemo.min.js',
        './assets/styles/FO/js/isotope.pkgd.js',
        './assets/styles/FO/js/fslightbox.js',
    ])
    .copyFiles({
        from: './assets/styles/FO/img',
        to: 'images/[path][name].[ext]',
    })
    .copyFiles({
        from: './assets/styles/FO/fonts',
        to: 'fonts/[path][name].[ext]',
    })

    .addPlugin(new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
    }))    
    .enableSingleRuntimeChunk()
    .enableSassLoader()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction());

module.exports = Encore.getWebpackConfig();
