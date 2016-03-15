import $ from 'jquery';
import dialog from 'phraseanet-common/src/components/dialog';

const recordPropertyModal = (services, datas) => {
    const { configService, localeService, appEvents } = services;
    const url = configService.get('baseUrl');
    const propertyTemplateEndPoint = 'prod/records/property/';


    const openModal = (datas) => {

        let $dialog = dialog.create(services);
        $dialog.load(`${url}${propertyTemplateEndPoint}`, 'GET', datas);
    };

    return { openModal };
};

export default recordPropertyModal;