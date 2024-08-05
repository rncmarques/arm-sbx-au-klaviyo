const { app } = require('@azure/functions');

app.http('au-klaviyo-new-contacts', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {

        const contactPayload = await request.json();
        const ostendoProfiles = contactPayload.profiles;
        const listArray = contactPayload.listMapping;
        const listMap = new Map(listArray.map((obj) => [obj.type, obj.list]));
        const profiles = processProfiles(ostendoProfiles,listMap);

        return {'jsonBody': {"profiles": profiles}}
    }
});

//TODO Safe Format text for names
function processProfiles(ostendoProfiles,listMap) {
    console.log(ostendoProfiles)
    //console.log(listMap)
    return {};
}

