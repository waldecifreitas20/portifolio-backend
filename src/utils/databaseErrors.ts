type DatabaseErrorType = 'P2002' | 'P2025';

const DATABASE_ERROR_CODES = {
  'P2002': 'object already exists',
  'P2025': 'object does not exists'
}


export function getDatabaseError(errorCode: DatabaseErrorType): string {
  return DATABASE_ERROR_CODES[errorCode];
}