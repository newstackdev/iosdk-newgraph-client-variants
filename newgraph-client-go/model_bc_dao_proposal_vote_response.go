/*
 * newlife-creator-api-eu-dev
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * API version: 2022-06-09T06:13:03Z
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package swagger

// BcDaoProposalVoteResponse Model
type BcDaoProposalVoteResponse struct {
	DaoId string `json:"daoId,omitempty"`
	More interface{} `json:"more,omitempty"`
	NextKey string `json:"next_key,omitempty"`
	Rows []BcDaoProposalVoteResponseRows `json:"rows,omitempty"`
}
