/*
 * newgraph-api-eu-dev
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * API version: 2022-10-04T15:34:01Z
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package swagger

type BcListDaoProposalsResponse struct {
	More bool `json:"more,omitempty"`
	DaoId string `json:"dao_id,omitempty"`
	NextKey string `json:"next_key,omitempty"`
	Rows []BcListDaoProposalsResponseRows `json:"rows,omitempty"`
}
