export function makeStringToSign() {

  return `POST

    ${request.contentType}
    ${headers}
    ${bucket}
    ${request.path}`
}
