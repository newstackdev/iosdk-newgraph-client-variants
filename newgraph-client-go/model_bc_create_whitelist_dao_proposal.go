/*
 * newlife-creator-api-eu-dev
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * API version: 2022-06-09T06:13:03Z
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package swagger

// BcCreateWhitelistDaoProposal Model
type BcCreateWhitelistDaoProposal struct {
	Quantity string `json:"quantity,omitempty"`
	Proposer string `json:"proposer,omitempty"`
	VoteStart string `json:"vote_start,omitempty"`
	DaoId string `json:"dao_id,omitempty"`
	DaoOwner string `json:"dao_owner,omitempty"`
	VoteEnd string `json:"vote_end,omitempty"`
	User string `json:"user,omitempty"`
	ProposerPrvKey string `json:"proposer_prv_key,omitempty"`
}