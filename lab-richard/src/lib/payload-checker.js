export const checker = arr => {
    if(!arr) {
        throw new Error('Payload is empty');
    }

    let {title, budget, update, _id, timestamp} = arr;
    if(!title, !budget, !update, !_id, !timestamp) {
        throw new Error('Payload is not complete');
    }
};