# coding: utf-8

"""
    Otreeba Open Cannabis API

    This is an open, canonical database of cannabis seed companies, strains, brands, products, retailers, and studies from [Otreeba](https://otreeba.com). It is written on the OpenAPI Specification AKA Swagger. You can find out more about the Open API Initiative at [https://www.openapis.org/](https://www.openapis.org), or more info on Swagger at [http://swagger.io/](http://swagger.io/).

    OpenAPI spec version: 1.0.0
    Contact: api@otreeba.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


from __future__ import absolute_import

import os
import sys
import unittest

import swagger_client
from swagger_client.rest import ApiException
from swagger_client.apis.brands_api import BrandsApi


class TestBrandsApi(unittest.TestCase):
    """ BrandsApi unit test stubs """

    def setUp(self):
        self.api = swagger_client.apis.brands_api.BrandsApi()

    def tearDown(self):
        pass

    def test_get_brand_by_ocpc(self):
        """
        Test case for get_brand_by_ocpc

        Find brand by Open Cannabis Product Code (OCPC).
        """
        pass

    def test_get_brand_edibles(self):
        """
        Test case for get_brand_edibles

        Get a list of all current edibles for the given brand.
        """
        pass

    def test_get_brand_extracts(self):
        """
        Test case for get_brand_extracts

        Get a list of all current extracts for the given brand.
        """
        pass

    def test_get_brand_flowers(self):
        """
        Test case for get_brand_flowers

        Get a list of all current flowers for the given brand.
        """
        pass

    def test_get_brand_products(self):
        """
        Test case for get_brand_products

        Get a list of all current products for the given brand.
        """
        pass

    def test_get_brands(self):
        """
        Test case for get_brands

        Get a list of all current brands.
        """
        pass


if __name__ == '__main__':
    unittest.main()