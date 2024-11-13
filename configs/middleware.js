export const errorHandler = (err, req, res, next) => {
    const defaultMessage =
        "We're having technical issues. Please try again later";
    const { status, message, error } = err;
    if (error) {
        console.log(error);
    }
    res.status(status).json({ message: message || defaultMessage});

    next({ status: 404, message: 'User not found!' });

    next({ status: 500, error });
};