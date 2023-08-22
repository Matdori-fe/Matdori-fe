/**
 * response.data의 기본 형태
 */
export interface CommonResponse<T> {
	resultCode: string;
	result: T;
}
