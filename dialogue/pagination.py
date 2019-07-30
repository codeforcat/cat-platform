from rest_framework.response import Response
from rest_framework import pagination
from collections import OrderedDict


class CustomPageNumber(pagination.PageNumberPagination):
    page_size = 2

    def get_paginated_response(self, data):
        return Response(OrderedDict([
            ('lastPage', self.page.paginator.count),
            ('countLastPage',
             self.page_size if self.page.paginator.count % self.page_size == 0 else self.page.paginator.count % self.page_size),
            ('current', self.page.number),
            ('next', self.get_next_link()),
            ('previous', self.get_previous_link()),
            ('results', data)
        ]))
