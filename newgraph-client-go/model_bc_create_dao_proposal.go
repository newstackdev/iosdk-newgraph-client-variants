/*
 * newlife-creator-api-eu-dev
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * API version: 2022-06-09T06:13:03Z
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package swagger

// BcCreateDaoProposal Model
type BcCreateDaoProposal struct {
	Summary string `json:"summary,omitempty"`
	VoteStart string `json:"vote_start,omitempty"`
	DaoId string `json:"dao_id,omitempty"`
	DaoOwner string `json:"dao_owner,omitempty"`
	VoteEnd string `json:"vote_end,omitempty"`
	Title string `json:"title,omitempty"`
	Url string `json:"url,omitempty"`
}
