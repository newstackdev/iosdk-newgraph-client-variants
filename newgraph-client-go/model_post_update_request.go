/*
 * newlife-creator-api-eu-dev
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * API version: 2022-05-20T13:39:48Z
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package swagger

// PostUpdateRequest Model
type PostUpdateRequest struct {
	License string `json:"license,omitempty"`
	Latitude float32 `json:"latitude,omitempty"`
	DoMint bool `json:"doMint,omitempty"`
	Description string `json:"description,omitempty"`
	Id string `json:"id"`
	Title string `json:"title,omitempty"`
	Longitude float32 `json:"longitude,omitempty"`
}