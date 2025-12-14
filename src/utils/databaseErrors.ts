const DATABASE_ERROR_CODES = {
  'P2002': 'object already exists'
}


export function getDatabaseError(errorCode: string): string {
  return DATABASE_ERROR_CODES['P2002'];
}