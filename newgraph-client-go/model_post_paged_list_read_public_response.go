/*
 * newgraph-api-eu-dev
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * API version: 2022-10-04T15:34:01Z
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package swagger

type PostPagedListReadPublicResponse struct {
	Value []MoodPagedListReadPublicResponsePosts `json:"value,omitempty"`
	Done bool `json:"done,omitempty"`
}
