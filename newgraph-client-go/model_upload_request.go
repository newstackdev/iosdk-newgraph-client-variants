/*
 * newlife-creator-api-eu-dev
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * API version: 2022-06-09T06:13:03Z
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package swagger

type UploadRequest struct {
	Filename string `json:"filename"`
	TargetId string `json:"targetId"`
	TargetModel string `json:"targetModel"`
	ContentType string `json:"contentType"`
}
