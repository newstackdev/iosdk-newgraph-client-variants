/*
 * newgraph-api-eu-dev
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 2022-10-04T15:34:01Z
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package io.swagger.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.client.model.MoodPagedListReadPublicResponsePosts;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * PostPagedListReadPublicResponse
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2022-10-05T17:10:47.666Z")
public class PostPagedListReadPublicResponse {
  @SerializedName("value")
  private List<MoodPagedListReadPublicResponsePosts> value = null;

  @SerializedName("done")
  private Boolean done = null;

  public PostPagedListReadPublicResponse value(List<MoodPagedListReadPublicResponsePosts> value) {
    this.value = value;
    return this;
  }

  public PostPagedListReadPublicResponse addValueItem(MoodPagedListReadPublicResponsePosts valueItem) {
    if (this.value == null) {
      this.value = new ArrayList<MoodPagedListReadPublicResponsePosts>();
    }
    this.value.add(valueItem);
    return this;
  }

   /**
   * Get value
   * @return value
  **/
  @ApiModelProperty(value = "")
  public List<MoodPagedListReadPublicResponsePosts> getValue() {
    return value;
  }

  public void setValue(List<MoodPagedListReadPublicResponsePosts> value) {
    this.value = value;
  }

  public PostPagedListReadPublicResponse done(Boolean done) {
    this.done = done;
    return this;
  }

   /**
   * Get done
   * @return done
  **/
  @ApiModelProperty(value = "")
  public Boolean isDone() {
    return done;
  }

  public void setDone(Boolean done) {
    this.done = done;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    PostPagedListReadPublicResponse postPagedListReadPublicResponse = (PostPagedListReadPublicResponse) o;
    return Objects.equals(this.value, postPagedListReadPublicResponse.value) &&
        Objects.equals(this.done, postPagedListReadPublicResponse.done);
  }

  @Override
  public int hashCode() {
    return Objects.hash(value, done);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class PostPagedListReadPublicResponse {\n");
    
    sb.append("    value: ").append(toIndentedString(value)).append("\n");
    sb.append("    done: ").append(toIndentedString(done)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

