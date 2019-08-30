from rest_framework import serializers
from drf_writable_nested import WritableNestedModelSerializer
from .models import Question, Phrase, Entities, Payload, Entity, EntityValue, Synonym


class PayloadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payload
        fields = ('payload_temp_id', 'state', 'message', 'text')


# class AnswerSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Answer
#         fields = ('answer_text',)


# class AnswerDisplaySerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Answer
#         fields = ('answer_id', 'answer_text')


class EntitiesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Entities
        fields = ('entity_id', 'entity_name')


class PhraseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Phrase
        fields = ('phrase_temp_id', 'phrase_text')


class QuestionSerializer(WritableNestedModelSerializer):
    # answers = AnswerSerializer(many=True, required=False, allow_null=True, source='answer')
    payloads = PayloadSerializer(many=True, required=False, allow_null=True, source='payload')
    entities = EntitiesSerializer(many=True, required=False, allow_null=True)
    phrases = PhraseSerializer(many=True, required=False, allow_null=True, source='phrase')

    class Meta:
        model = Question
        fields = ('question_id', 'question_name', 'phrases', 'entities', 'random', 'payloads')


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
