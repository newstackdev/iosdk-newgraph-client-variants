/*
 * newgraph-api-eu-dev
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * API version: 2022-10-04T15:34:01Z
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package swagger

type MoodUpdateRequest struct {
	Latitude float32 `json:"latitude,omitempty"`
	Description string `json:"description,omitempty"`
	Id string `json:"id"`
	Title string `json:"title,omitempty"`
	Longitude float32 `json:"longitude,omitempty"`
}
