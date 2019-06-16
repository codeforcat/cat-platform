from rest_framework import serializers
from drf_writable_nested import WritableNestedModelSerializer
from .models import Question, Phrase, Answer, Entity, EntityValue, Synonym


class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = ('answer_text', 'additional_state', 'additional_message')


class AnswerDisplaySerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = ('answer_id', 'answer_text', 'additional_state', 'additional_message')


class PhraseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Phrase
        fields = ('phrase_temp_id', 'phrase_text')


class QuestionSerializer(WritableNestedModelSerializer):
    answer = AnswerSerializer(many=True, required=False, allow_null=True, source='answer_field')
    phrases = PhraseSerializer(many=True, required=False, allow_null=True, source='phrase')

    class Meta:
        model = Question
        fields = ('question_id', 'question_name', 'parent_answer_id', 'phrases', 'answer')


class SynonymSerializer(serializers.ModelSerializer):
    class Meta:
        model = Synonym
        fields = ('synonym_text',)


class EntityValueSerializer(serializers.ModelSerializer):
    synonyms = SynonymSerializer(many=True, required=False, allow_null=True, source='synonym')

    class Meta:
        model = EntityValue
        fields = ('value_text', 'synonyms')


class EntitySerializer(WritableNestedModelSerializer):
    entity_values = EntityValueSerializer(many=True, required=False, allow_null=True, source='entity_value')

    class Meta:
        model = Entity
        fields = ('entity_id', 'entity_name', 'entity_values')
