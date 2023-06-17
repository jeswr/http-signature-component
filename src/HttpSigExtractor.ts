import {
  BadRequestHttpError,
  Credentials,
  CredentialsExtractor,
  HttpRequest,
  NotImplementedHttpError,
  getLoggerFor,
  matchesAuthorizationScheme
} from "@solid/community-server";

// See https://github.com/CommunitySolidServer/CommunitySolidServer/blob/3fbdc69f3f3bb9c0733ec59c21f0f2f890d0afde/src/authentication/BearerWebIdExtractor.ts
// and similar extractors for inspipration
export class HttpSigExtractor extends CredentialsExtractor {
  protected readonly logger = getLoggerFor(this);

  public constructor() {
    super();
  }

  public async canHandle({ headers }: HttpRequest): Promise<void> {
    this.logger.info('Attempting to handle HttpSigExtractor')
    throw new NotImplementedHttpError();
  }

  public async handle(request: HttpRequest): Promise<Credentials> {
    throw new NotImplementedHttpError();
  }
}
