import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => {

    //TODO: use the locale to get messages
    return {
        messages: {}
    };
});