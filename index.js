'use strict';

// [START build_service]
// By default, the client will authenticate using the service account file
// specified by the GOOGLE_APPLICATION_CREDENTIALS environment variable and use
// the project specified by the GCLOUD_PROJECT environment variable. See
// https://googlecloudplatform.github.io/google-cloud-node/#/docs/datastore/latest/guides/authentication
const Datastore = require('@google-cloud/datastore');
const cors = require('cors');

// Instantiates a client
const datastore = Datastore();
// [END build_service]

function sortOrder(asc){
    if(!asc || asc === true){
        return {ascending: true};
    }else {
        return {descending: true};
    }
}

function getLimit(amount){
    if(amount){
        return parseInt(amount);
    }else {
        return 200;
    }
}

function doQuery(req, res) {
    if (req.query.id) {
        const query = datastore.createQuery('Devices')
            .filter('id', '=', req.query.id)
            .order('created', sortOrder(req.query.sort))
            .limit(getLimit(req.query.limit));
        datastore.runQuery(query)
            .then((results) => {
                // Task entities found.
                const tasks = results[0];
                res.status(200).json(tasks);
            });

    } else {
        res.status(200).json({});
    }
}

exports.iotApi = function iotApi(req, res) {

    var corsFn = cors();
    corsFn(req, res, function() {
        doQuery(req, res);
    });

};