package io.swagger.client.api

import io.swagger.client.model.Flower
import io.swagger.client.model.Inline_response_200_4
import com.wordnik.swagger.client._
import scala.concurrent.Future
import collection.mutable

class FlowersApi(client: TransportClient, config: SwaggerConfig) extends ApiClient(client, config) {

  def getFlowerByOcpc(ocpc: String)(implicit reader: ClientResponseReader[Flower]): Future[Flower] = {
    // create path and map variables
    val path = (addFmt("/flowers/{ocpc}")
        replaceAll ("\\{" + "ocpc" + "\\}",ocpc.toString))

    // query params
    val queryParams = new mutable.HashMap[String, String]
    val headerParams = new mutable.HashMap[String, String]

    if (ocpc == null) throw new Exception("Missing required parameter 'ocpc' when calling FlowersApi->getFlowerByOcpc")


    val resFuture = client.submit("GET", path, queryParams.toMap, headerParams.toMap, "")
    resFuture flatMap { resp =>
      process(reader.read(resp))
    }
  }

  def getFlowers(page: Option[Integer] = None,
      count: Option[Integer] = Some(10),
      sort: Option[String] = Some(-createdAt)
      )(implicit reader: ClientResponseReader[Inline_response_200_4]): Future[Inline_response_200_4] = {
    // create path and map variables
    val path = (addFmt("/flowers"))

    // query params
    val queryParams = new mutable.HashMap[String, String]
    val headerParams = new mutable.HashMap[String, String]

    page match {
    case Some(param) => queryParams += "page" -> param.toString
    case _ => queryParams
    }
    count match {
    case Some(param) => queryParams += "count" -> param.toString
    case _ => queryParams
    }
    sort match {
    case Some(param) => queryParams += "sort" -> param.toString
    case _ => queryParams
    }

    val resFuture = client.submit("GET", path, queryParams.toMap, headerParams.toMap, "")
    resFuture flatMap { resp =>
      process(reader.read(resp))
    }
  }


}
