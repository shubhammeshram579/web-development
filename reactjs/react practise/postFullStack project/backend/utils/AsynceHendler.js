const AsynceHendler = (requestHendler) => {
    return (req, res, next) => {
        Promise.resolve(requestHendler(req, res, next)).catch((err)=> next(err))
    }

}

export {AsynceHendler}