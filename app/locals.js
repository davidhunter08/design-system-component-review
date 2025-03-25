module.exports = (config) => (req, res, next) => {
  res.locals.serviceName = config.serviceName;
  
  // Add styleVersion, defaulting to config value or 'v1'
  res.locals.styleVersion = req.query.styleVersion || config.styleVersion || 'v1';

  next();
};