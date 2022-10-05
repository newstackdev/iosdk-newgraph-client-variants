/*
 * newgraph-api-eu-dev
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * API version: 2022-10-04T15:34:01Z
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package swagger

type MoodPagedListReadPublicResponseMoods struct {
	Created string `json:"created,omitempty"`
	Author *MoodPagedListReadPublicResponseAuthor `json:"author,omitempty"`
	Latitude float32 `json:"latitude,omitempty"`
	Description string `json:"description,omitempty"`
	AspectRatio float32 `json:"aspectRatio,omitempty"`
	Title string `json:"title,omitempty"`
	Content string `json:"content,omitempty"`
	StakeToAccess float32 `json:"stakeToAccess,omitempty"`
	Tags []MoodPagedListReadPublicResponseTags `json:"tags,omitempty"`
	ContentUrl string `json:"contentUrl,omitempty"`
	PostsCount float32 `json:"postsCount,omitempty"`
	BlurHash string `json:"blurHash,omitempty"`
	Id string `json:"id,omitempty"`
	Updated string `json:"updated,omitempty"`
	ContentType string `json:"contentType,omitempty"`
	Longitude float32 `json:"longitude,omitempty"`
}
