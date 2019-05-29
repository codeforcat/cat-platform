from rest_framework import viewsets, generics
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from django_filters import rest_framework as filters
from .models import Question, Entity
from .serializer import QuestionSerializer, EntitySerializer


class QuestionViewSet(viewsets.ViewSet, generics.ListCreateAPIView, generics.RetrieveUpdateDestroyAPIView):
    # permission_classes = (IsAuthenticatedOrReadOnly,)
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

    def list(self, request):
        queryset = Question.objects.all()
        qs = self.filter_queryset(queryset)
        serializer = QuestionSerializer(qs, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = Question.objects.filter(question_id=pk)
        question = generics.get_object_or_404(queryset, question_id=pk)
        serializer = QuestionSerializer(question)
        return Response(serializer.data)


class EntityViewSet(viewsets.ViewSet, generics.ListCreateAPIView, generics.RetrieveUpdateDestroyAPIView):
    # permission_classes = (IsAuthenticatedOrReadOnly,)
    queryset = Entity.objects.all()
    serializer_class = EntitySerializer

    def list(self, request):
        queryset = Entity.objects.all()
        qs = self.filter_queryset(queryset)
        serializer = EntitySerializer(qs, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = Entity.objects.filter(entity_id=pk)
        entity = generics.get_object_or_404(queryset, entity_id=pk)
        serializer = EntitySerializer(entity)
        return Response(serializer.data)
