package io.swagger.client.model {

import io.swagger.client.model.Object;

    [XmlRootNode(name="Product")]
    public class Product {
        /* Name of the product. */
        [XmlElement(name="name")]
        public var name: String = null;
        /* Open Cannabis Product Code for the product. */
        [XmlElement(name="ocpc")]
        public var ocpc: String = null;
        /* Name and Open Cannabis Product Code of the brand that created this product. */
        [XmlElement(name="brand")]
        public var brand: Object = NaN;
        /* Type of product. */
        [XmlElement(name="type")]
        public var type: String = null;
        /* Name and Open Cannabis Product Code of the strain for this product. */
        [XmlElement(name="strain")]
        public var strain: Object = NaN;
        /* Description of the product. */
        [XmlElement(name="description")]
        public var description: String = null;
        /* URL for QR that leads to page on Cannabis Reports. */
        [XmlElement(name="qr")]
        public var qr: String = null;
        /* URL for the product on Cannabis Reports. */
        [XmlElement(name="url")]
        public var url: String = null;
        /* URL for the main photo of the product. */
        [XmlElement(name="image")]
        public var image: String = null;
        /* URL for the PDF containing lab testing information for this product. */
        [XmlElement(name="labTest")]
        public var labTest: String = null;
        /* THC measurement for this product. */
        [XmlElement(name="thc")]
        public var thc: String = null;
        /* CBD measurement for this product. */
        [XmlElement(name="cbd")]
        public var cbd: String = null;
        /* Cannabis measurement for this product. */
        [XmlElement(name="cannabis")]
        public var cannabis: String = null;
        /* Hash oil measurement for this product. */
        [XmlElement(name="hashOil")]
        public var hashOil: String = null;
        /* Date and time record was created, UTC. */
        [XmlElement(name="createdAt")]
        public var createdAt: Date = null;
        /* Date and time record was updated, UTC. */
        [XmlElement(name="updatedAt")]
        public var updatedAt: Date = null;

    public function toString(): String {
        var str: String = "Product: ";
        str += " (name: " + name + ")";
        str += " (ocpc: " + ocpc + ")";
        str += " (brand: " + brand + ")";
        str += " (type: " + type + ")";
        str += " (strain: " + strain + ")";
        str += " (description: " + description + ")";
        str += " (qr: " + qr + ")";
        str += " (url: " + url + ")";
        str += " (image: " + image + ")";
        str += " (labTest: " + labTest + ")";
        str += " (thc: " + thc + ")";
        str += " (cbd: " + cbd + ")";
        str += " (cannabis: " + cannabis + ")";
        str += " (hashOil: " + hashOil + ")";
        str += " (createdAt: " + createdAt + ")";
        str += " (updatedAt: " + updatedAt + ")";
        return str;
    }

}

}
