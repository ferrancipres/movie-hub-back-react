
interface TConfig {
    [key: string]: EnvironmentConfig;
};

interface EnvironmentConfig {
    app: AppConfig;
    db: MongoDBConfig;
    auth0?: AUTH0;
};

interface MongoDBConfig {
    URI: string;
};

interface AppConfig {
    PORT: string | number;
};

interface AUTH0 {
    client_origin: string | undefined;
    audience: string | undefined;
    issuer: string | undefined;
}

export default TConfig