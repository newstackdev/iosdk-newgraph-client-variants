/*
 * newgraph-api-eu-dev
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * API version: 2022-10-04T15:34:01Z
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package swagger

type BcPoolCreateRequest struct {
	Owner string `json:"owner"`
	OwnerPrvActiveKey string `json:"owner_prv_active_key,omitempty"`
	Payer string `json:"payer,omitempty"`
}
