const videoRangeCapture = (services, datas, activeTab = false) => {
    const {configService, localeService, appEvents} = services;
    let $container = null;
    let videojs = {};
    let initData = {};
    let options = {
        playbackRates: [],
        fluid: true
    };
    let rangeCapture;
    const initialize = (params) => {
        $container = params.$container;
        initData = params.data;
        let aspectRatio = configService.get('resource.aspectRatio');


        if (configService.get('resource.aspectRatio') !== null) {
            options.aspectRatio = configService.get('resource.aspectRatio');
        }

        if (configService.get('resource.autoplay') !== null) {
            options.autoplay = configService.get('resource.autoplay');
        }

        if (configService.get('resource.playbackRates') !== null) {
            options.playbackRates = configService.get('resource.playbackRates');
        }

        if (initData.videoEditorConfig !== null) {
            options.seekBackwardStep = initData.videoEditorConfig.seekBackwardStep;
            options.seekForwardStep = initData.videoEditorConfig.seekForwardStep;
        }

        options.techOrder = ['html5', 'flash'];

        require.ensure([], () => {
            // load videoJs lib
            //require('../../videoEditor/style/main.scss');
            rangeCapture = require('../../videoEditor/rangeCapture').default;
            let rangeCaptureInstance = rangeCapture(services);
            rangeCaptureInstance.initialize(params, options);
            //render(initData);
        });

    }

    return {initialize}
}

export default videoRangeCapture;
