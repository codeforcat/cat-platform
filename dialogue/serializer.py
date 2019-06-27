from rest_framework import serializers
from drf_writable_nested import WritableNestedModelSerializer
from .models import Question, Phrase, Answer, Entity, EntityValue, Synonym


class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = ('answer_text',)


class AnswerDisplaySerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = ('answer_id', 'answer_text')


class PhraseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Phrase
        fields = ('phrase_temp_id', 'phrase_text')


class QuestionSerializer(WritableNestedModelSerializer):
    answers = AnswerSerializer(many=True, required=False, allow_null=True, source='answer')
    phrases = PhraseSerializer(many=True, required=False, allow_null=True, source='phrase')

    class Meta:
        model = Question
        fields = ('question_id', 'question_name', 'parent_answer_id', 'phrases', 'answers',
                  'additional_state', 'additional_message')


class SynonymSerializer(serializers.ModelSerializer):
    class Meta:
        model = Synonym
        fields = ('value_temp_id', 'synonym_temp_id', 'synonym_text')


class EntityValueSerializer(WritableNestedModelSerializer):
    synonyms = SynonymSerializer(many=True, required=False, allow_null=True, source='synonym')

    class Meta:
        model = EntityValue
        fields = ('value_temp_id', 'value_text', 'synonyms')


class EntitySerializer(WritableNestedModelSerializer):
    entity_values = EntityValueSerializer(many=True, required=False, allow_null=True, source='entity_value')

    class Meta:
        model = Entity
        fields = ('entity_id', 'entity_name', 'entity_values')
