/**
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


#include "SWGInline_response_200_12.h"

#include "SWGHelpers.h"

#include <QJsonDocument>
#include <QJsonArray>
#include <QObject>
#include <QDebug>

namespace Swagger {


SWGInline_response_200_12::SWGInline_response_200_12(QString* json) {
    init();
    this->fromJson(*json);
}

SWGInline_response_200_12::SWGInline_response_200_12() {
    init();
}

SWGInline_response_200_12::~SWGInline_response_200_12() {
    this->cleanup();
}

void
SWGInline_response_200_12::init() {
    meta = new SWGMeta();
}

void
SWGInline_response_200_12::cleanup() {
    
    if(meta != nullptr) {
        delete meta;
    }
}

SWGInline_response_200_12*
SWGInline_response_200_12::fromJson(QString &json) {
    QByteArray array (json.toStdString().c_str());
    QJsonDocument doc = QJsonDocument::fromJson(array);
    QJsonObject jsonObject = doc.object();
    this->fromJsonObject(jsonObject);
    return this;
}

void
SWGInline_response_200_12::fromJsonObject(QJsonObject &pJson) {
    ::Swagger::setValue(&meta, pJson["meta"], "SWGMeta", "SWGMeta");
}

QString
SWGInline_response_200_12::asJson ()
{
    QJsonObject* obj = this->asJsonObject();
    
    QJsonDocument doc(*obj);
    QByteArray bytes = doc.toJson();
    return QString(bytes);
}

QJsonObject*
SWGInline_response_200_12::asJsonObject() {
    QJsonObject* obj = new QJsonObject();
    
    toJsonValue(QString("meta"), meta, obj, QString("SWGMeta"));

    return obj;
}

SWGMeta*
SWGInline_response_200_12::getMeta() {
    return meta;
}
void
SWGInline_response_200_12::setMeta(SWGMeta* meta) {
    this->meta = meta;
}



} /* namespace Swagger */
