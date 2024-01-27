import { ConfigService } from "../services/config/config.service";

export function initConfig(configService: ConfigService) {
    return () => configService.loadConfig();
}