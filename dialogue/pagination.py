from rest_framework.response import Response
from rest_framework import pagination
from collections import OrderedDict


class CustomPageNumber(pagination.PageNumberPagination):
    page_size = 20

    def get_paginated_response(self, data):
        divPage = divmod(self.page.paginator.count, self.page_size)
        return Response(OrderedDict([
            ('lastPage', self.page.paginator.count),
            ('countLastPage', self.page_size if divPage[0] >= self.page.number else divPage[1]),
            ('current', self.page.number),
            ('next', self.get_next_link()),
            ('previous', self.get_previous_link()),
            ('results', data)
        ]))
