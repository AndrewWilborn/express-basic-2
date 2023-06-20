const flowers = [
    { type: 'marigold', color: 'orange'},
    { type: 'daisy', color: 'yellow'},
    { type: 'tulip', color: 'red'}
];

export function getFlowers(req, res){
    res.send(flowers)
}

export function addNewFlower(req, res){
    flowers.push(req.body)
    // proper "function only does one thing" way to do things
    res.status(201).send({ success: true, message: "Flower added." });
}