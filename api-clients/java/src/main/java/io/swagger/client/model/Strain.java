/*
 * Otreeba Open Cannabis API
 * This is an open, canonical database of cannabis seed companies, strains, brands, products, retailers, and studies from [Otreeba](https://otreeba.com). It is written on the OpenAPI Specification AKA Swagger. You can find out more about the Open API Initiative at [https://www.openapis.org/](https://www.openapis.org), or more info on Swagger at [http://swagger.io/](http://swagger.io/).
 *
 * OpenAPI spec version: 1.0.0
 * Contact: api@otreeba.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package io.swagger.client.model;

import java.util.Objects;
import com.google.gson.annotations.SerializedName;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.util.ArrayList;
import java.util.List;
import org.joda.time.DateTime;

/**
 * Strain
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2017-05-26T06:12:20.858Z")
public class Strain {
  @SerializedName("name")
  private String name = null;

  @SerializedName("ocpc")
  private String ocpc = null;

  @SerializedName("seedCompany")
  private Object seedCompany = null;

  @SerializedName("qr")
  private String qr = null;

  @SerializedName("url")
  private String url = null;

  @SerializedName("image")
  private String image = null;

  @SerializedName("lineage")
  private Object lineage = null;

  @SerializedName("genetics")
  private Object genetics = null;

  @SerializedName("children")
  private List<String> children = new ArrayList<String>();

  @SerializedName("createdAt")
  private DateTime createdAt = null;

  @SerializedName("updatedAt")
  private DateTime updatedAt = null;

  public Strain name(String name) {
    this.name = name;
    return this;
  }

   /**
   * Name of the strain.
   * @return name
  **/
  @ApiModelProperty(example = "Jack Herer", required = true, value = "Name of the strain.")
  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public Strain ocpc(String ocpc) {
    this.ocpc = ocpc;
    return this;
  }

   /**
   * Open Cannabis Product Code for the strain.
   * @return ocpc
  **/
  @ApiModelProperty(example = "VUJCJ4TYMG000000000000000", value = "Open Cannabis Product Code for the strain.")
  public String getOcpc() {
    return ocpc;
  }

  public void setOcpc(String ocpc) {
    this.ocpc = ocpc;
  }

  public Strain seedCompany(Object seedCompany) {
    this.seedCompany = seedCompany;
    return this;
  }

   /**
   * Name and Open Cannabis Product Code of the seed company that created the strain.
   * @return seedCompany
  **/
  @ApiModelProperty(example = "{&quot;name&quot;:&quot;Sensi Seeds&quot;,&quot;ocpc&quot;:&quot;VUJCJ00000000000000000000&quot;}", value = "Name and Open Cannabis Product Code of the seed company that created the strain.")
  public Object getSeedCompany() {
    return seedCompany;
  }

  public void setSeedCompany(Object seedCompany) {
    this.seedCompany = seedCompany;
  }

  public Strain qr(String qr) {
    this.qr = qr;
    return this;
  }

   /**
   * URL for QR that leads to page on Cannabis Reports.
   * @return qr
  **/
  @ApiModelProperty(example = "https://www.cannabisreports.com/strain-reports/sensi-seeds/jack-herer/qr-code.svg", value = "URL for QR that leads to page on Cannabis Reports.")
  public String getQr() {
    return qr;
  }

  public void setQr(String qr) {
    this.qr = qr;
  }

  public Strain url(String url) {
    this.url = url;
    return this;
  }

   /**
   * URL for strain on Cannabis Reports.
   * @return url
  **/
  @ApiModelProperty(example = "https://www.cannabisreports.com/strain-reports/sensi-seeds/jack-herer", value = "URL for strain on Cannabis Reports.")
  public String getUrl() {
    return url;
  }

  public void setUrl(String url) {
    this.url = url;
  }

  public Strain image(String image) {
    this.image = image;
    return this;
  }

   /**
   * URL for the main photo of the strain.
   * @return image
  **/
  @ApiModelProperty(example = "https://www.cannabisreports.com/images/strains/a/full_ae82eef3bb2b7694df7f8bfa0da22a5d2b0f3689.jpg", value = "URL for the main photo of the strain.")
  public String getImage() {
    return image;
  }

  public void setImage(String image) {
    this.image = image;
  }

  public Strain lineage(Object lineage) {
    this.lineage = lineage;
    return this;
  }

   /**
   * Object of countries that this strain has lineages from. {'Country Name' => 'ISO 3166-1 Two Letter Country Code'}
   * @return lineage
  **/
  @ApiModelProperty(example = "{&quot;Afghanistan&quot;:&quot;AF&quot;,&quot;Colombia&quot;:&quot;CO&quot;,&quot;India&quot;:&quot;IN&quot;,&quot;Mexico&quot;:&quot;MX&quot;,&quot;Thailand&quot;:&quot;TH&quot;}", value = "Object of countries that this strain has lineages from. {'Country Name' => 'ISO 3166-1 Two Letter Country Code'}")
  public Object getLineage() {
    return lineage;
  }

  public void setLineage(Object lineage) {
    this.lineage = lineage;
  }

  public Strain genetics(Object genetics) {
    this.genetics = genetics;
    return this;
  }

   /**
   * Names of the parents of the strains and their associated Open Cannabis Product Codes.
   * @return genetics
  **/
  @ApiModelProperty(example = "{&quot;names&quot;:&quot;(Northern Lights #5 x Skunk #1) x Haze&quot;,&quot;ucpc&quot;:&quot;(VUJCJ4MPQ2000000000000000 x VUJCJY6ZUC000000000000000) x 9XVU7WJQCD000000000000000&quot;}", value = "Names of the parents of the strains and their associated Open Cannabis Product Codes.")
  public Object getGenetics() {
    return genetics;
  }

  public void setGenetics(Object genetics) {
    this.genetics = genetics;
  }

  public Strain children(List<String> children) {
    this.children = children;
    return this;
  }

  public Strain addChildrenItem(String childrenItem) {
    this.children.add(childrenItem);
    return this;
  }

   /**
   * Open Cannabis Product Codes of the children of this strain.
   * @return children
  **/
  @ApiModelProperty(example = "null", value = "Open Cannabis Product Codes of the children of this strain.")
  public List<String> getChildren() {
    return children;
  }

  public void setChildren(List<String> children) {
    this.children = children;
  }

  public Strain createdAt(DateTime createdAt) {
    this.createdAt = createdAt;
    return this;
  }

   /**
   * Date and time record was created, UTC.
   * @return createdAt
  **/
  @ApiModelProperty(example = "2014-04-09 09:29:57", value = "Date and time record was created, UTC.")
  public DateTime getCreatedAt() {
    return createdAt;
  }

  public void setCreatedAt(DateTime createdAt) {
    this.createdAt = createdAt;
  }

  public Strain updatedAt(DateTime updatedAt) {
    this.updatedAt = updatedAt;
    return this;
  }

   /**
   * Date and time record was updated, UTC.
   * @return updatedAt
  **/
  @ApiModelProperty(example = "2014-04-09 09:29:57", value = "Date and time record was updated, UTC.")
  public DateTime getUpdatedAt() {
    return updatedAt;
  }

  public void setUpdatedAt(DateTime updatedAt) {
    this.updatedAt = updatedAt;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Strain strain = (Strain) o;
    return Objects.equals(this.name, strain.name) &&
        Objects.equals(this.ocpc, strain.ocpc) &&
        Objects.equals(this.seedCompany, strain.seedCompany) &&
        Objects.equals(this.qr, strain.qr) &&
        Objects.equals(this.url, strain.url) &&
        Objects.equals(this.image, strain.image) &&
        Objects.equals(this.lineage, strain.lineage) &&
        Objects.equals(this.genetics, strain.genetics) &&
        Objects.equals(this.children, strain.children) &&
        Objects.equals(this.createdAt, strain.createdAt) &&
        Objects.equals(this.updatedAt, strain.updatedAt);
  }

  @Override
  public int hashCode() {
    return Objects.hash(name, ocpc, seedCompany, qr, url, image, lineage, genetics, children, createdAt, updatedAt);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Strain {\n");
    
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    ocpc: ").append(toIndentedString(ocpc)).append("\n");
    sb.append("    seedCompany: ").append(toIndentedString(seedCompany)).append("\n");
    sb.append("    qr: ").append(toIndentedString(qr)).append("\n");
    sb.append("    url: ").append(toIndentedString(url)).append("\n");
    sb.append("    image: ").append(toIndentedString(image)).append("\n");
    sb.append("    lineage: ").append(toIndentedString(lineage)).append("\n");
    sb.append("    genetics: ").append(toIndentedString(genetics)).append("\n");
    sb.append("    children: ").append(toIndentedString(children)).append("\n");
    sb.append("    createdAt: ").append(toIndentedString(createdAt)).append("\n");
    sb.append("    updatedAt: ").append(toIndentedString(updatedAt)).append("\n");
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

