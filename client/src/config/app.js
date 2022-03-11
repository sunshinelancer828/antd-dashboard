const common = {
  SERVER_URL: "https://localhost:9001"
};

const dev = {
  LOGGER_ENABLE: true,
  API_BASE_URL: "http://localhost:80/api/"
};

const prod = {
  LOGGER_ENABLE: false,
  API_BASE_URL: "api/"
};

const config = process.env.NODE_ENV === "production" ? prod : dev;

// eslint-disable-next-line
export default {
  ...common,
  ...config  
};

