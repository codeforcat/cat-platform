from rest_framework import viewsets, generics
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from rest_framework import filters
from .models import Question, Answer, Entity
from .serializer import QuestionSerializer, AnswerDisplaySerializer, EntitySerializer
from .pagination import CustomPageNumber


class QuestionViewSet(viewsets.ViewSet, generics.ListCreateAPIView, generics.RetrieveUpdateDestroyAPIView):
    # permission_classes = (IsAuthenticatedOrReadOnly,)
    queryset = Question.objects.filter()
    serializer_class = QuestionSerializer
    filter_backends = (filters.SearchFilter, filters.OrderingFilter)
    search_fields = ('phrase__phrase_text', 'answer__answer_text')
    ordering_fields = ('question_name', 'phrase__phrase_text', 'answer__answer_text')
    ordering = ('-question_id',)
    pagination_class = CustomPageNumber

    def list(self, request):
        queryset = self.filter_queryset(self.get_queryset())
        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)
        qs = self.filter_queryset(queryset)
        serializer = QuestionSerializer(qs, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = Question.objects.filter(pk=pk)
        question = generics.get_object_or_404(queryset, pk=pk)
        serializer = QuestionSerializer(question)
        return Response(serializer.data)


class AnswerDisplayViewSet(viewsets.ViewSet, generics.ListCreateAPIView):
    # permission_classes = (IsAuthenticatedOrReadOnly,)
    queryset = Answer.objects.all()
    serializer_class = AnswerDisplaySerializer

    def list(self, request):
        queryset = Answer.objects.all()
        qs = self.filter_queryset(queryset)
        serializer = AnswerDisplaySerializer(qs, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = Answer.objects.filter(pk=pk)
        answer = generics.get_object_or_404(queryset, pk=pk)
        serializer = AnswerDisplaySerializer(answer)
        return Response(serializer.data)


class EntityViewSet(viewsets.ViewSet, generics.ListCreateAPIView, generics.RetrieveUpdateDestroyAPIView):
    # permission_classes = (IsAuthenticatedOrReadOnly,)
    queryset = Entity.objects.filter()
    serializer_class = EntitySerializer
    filter_backends = (filters.SearchFilter, filters.OrderingFilter)
    search_fields = ('entity_name', 'entity_value__value_text', 'entity_value__synonym__synonym_text')
    ordering_fields = ('entity_name', 'entity_value__value_text')
    ordering = ('-entity_id',)
    pagination_class = CustomPageNumber

    def list(self, request):
        queryset = self.filter_queryset(self.get_queryset())
        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)
        qs = self.filter_queryset(queryset)
        serializer = EntitySerializer(qs, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = Entity.objects.filter(pk=pk)
        entity = generics.get_object_or_404(queryset, pk=pk)
        serializer = EntitySerializer(entity)
        return Response(serializer.data)
