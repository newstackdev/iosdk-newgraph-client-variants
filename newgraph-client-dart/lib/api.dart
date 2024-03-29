library swagger.api;

import 'dart:async';
import 'dart:convert';
import 'package:http/browser_client.dart';
import 'package:http/http.dart';

part 'api_client.dart';
part 'api_helper.dart';
part 'api_exception.dart';
part 'auth/authentication.dart';
part 'auth/api_key_auth.dart';
part 'auth/oauth.dart';
part 'auth/http_basic_auth.dart';

part 'api/default_api.dart';

part 'model/any_response.dart';
part 'model/bc_acc_create_request.dart';
part 'model/bc_approve_dao_proposal_request.dart';
part 'model/bc_auth_eth_request.dart';
part 'model/bc_auth_eth_response.dart';
part 'model/bc_collection_create_request.dart';
part 'model/bc_collection_create_request_template_fields.dart';
part 'model/bc_create_dao_proposal.dart';
part 'model/bc_create_dao_request.dart';
part 'model/bc_create_dao_response.dart';
part 'model/bc_create_whitelist_dao_proposal.dart';
part 'model/bc_dao_proposal_execute_request.dart';
part 'model/bc_dao_proposal_execute_response.dart';
part 'model/bc_dao_proposal_vote_request.dart';
part 'model/bc_dao_proposal_vote_response.dart';
part 'model/bc_dao_proposal_vote_response_rows.dart';
part 'model/bc_dao_widthdraw_vote_deposit_request.dart';
part 'model/bc_dao_widthdraw_vote_deposit_response.dart';
part 'model/bc_get_account_info.dart';
part 'model/bc_get_info_resp.dart';
part 'model/bc_get_pool_info.dart';
part 'model/bc_key_pair_create_request.dart';
part 'model/bc_key_pair_create_response.dart';
part 'model/bc_list_dao_proposals_response.dart';
part 'model/bc_list_dao_proposals_response_rows.dart';
part 'model/bc_list_dao_proposals_response_vote_no.dart';
part 'model/bc_list_dao_whitelist_response.dart';
part 'model/bc_mint_asset_request.dart';
part 'model/bc_mint_asset_request_immutable_data.dart';
part 'model/bc_pool_create_request.dart';
part 'model/bc_stake_main_dao_request.dart';
part 'model/bc_stake_pool_request.dart';
part 'model/bc_tx_response.dart';
part 'model/configure_user_request.dart';
part 'model/creative_search_response.dart';
part 'model/creative_search_response_hits.dart';
part 'model/creative_search_response_source.dart';
part 'model/creative_search_response_source_meta.dart';
part 'model/error_response.dart';
part 'model/mood_attach_request.dart';
part 'model/mood_create_request.dart';
part 'model/mood_create_response.dart';
part 'model/mood_list_attached_posts_response.dart';
part 'model/mood_paged_list_read_public_response.dart';
part 'model/mood_paged_list_read_public_response_author.dart';
part 'model/mood_paged_list_read_public_response_moods.dart';
part 'model/mood_paged_list_read_public_response_posts.dart';
part 'model/mood_paged_list_read_public_response_rel.dart';
part 'model/mood_paged_list_read_public_response_tags.dart';
part 'model/mood_paged_list_read_public_response_value.dart';
part 'model/mood_read_response.dart';
part 'model/mood_update_request.dart';
part 'model/ok_response.dart';
part 'model/paged_rated_response_post.dart';
part 'model/paged_rated_response_post_value.dart';
part 'model/paged_rated_response_user.dart';
part 'model/paged_rated_response_user_rating.dart';
part 'model/paged_rated_response_user_value.dart';
part 'model/payment_stripe_payment_intent_create_request.dart';
part 'model/payment_stripe_payment_intent_create_request_items.dart';
part 'model/payment_stripe_payment_intent_create_response.dart';
part 'model/payment_stripe_webhook_request.dart';
part 'model/payment_stripe_webhook_request_data.dart';
part 'model/post_create_request.dart';
part 'model/post_create_response.dart';
part 'model/post_paged_list_read_public_response.dart';
part 'model/post_read_response.dart';
part 'model/post_remote_meta_proxy_response.dart';
part 'model/post_tags_search_public_response.dart';
part 'model/post_tags_search_public_response_value.dart';
part 'model/post_update_request.dart';
part 'model/rating_update_request.dart';
part 'model/rating_update_response.dart';
part 'model/report_update_request.dart';
part 'model/report_update_response.dart';
part 'model/sync_contacts_request.dart';
part 'model/sync_contacts_request_contacts.dart';
part 'model/sync_contacts_request_phones.dart';
part 'model/sync_contacts_request_postal_addresses.dart';
part 'model/sync_contacts_response.dart';
part 'model/upload_request.dart';
part 'model/upload_request_generic.dart';
part 'model/upload_response.dart';
part 'model/user_availability_response.dart';
part 'model/user_create_request.dart';
part 'model/user_delete_request.dart';
part 'model/user_invitation_paged_list_read_public_response.dart';
part 'model/user_invitation_paged_list_read_public_response_invitation.dart';
part 'model/user_invitation_paged_list_read_public_response_value.dart';
part 'model/user_invitation_read_public_response.dart';
part 'model/user_invite_request.dart';
part 'model/user_paged_list_read_public_response.dart';
part 'model/user_pre_register_request.dart';
part 'model/user_read_private_response.dart';
part 'model/user_read_public_response.dart';
part 'model/user_stake_request.dart';
part 'model/user_transfer_request.dart';
part 'model/user_update_request.dart';
part 'model/user_upload_request.dart';


ApiClient defaultApiClient = new ApiClient();
