from django.db import models
from django_mysql.models import JSONField, Model


class Question(Model):
    class Meta:
        db_table = 'question'

    question_id = models.AutoField(db_column='QUESTION ID', primary_key=True)
    question_name = models.CharField(max_length=100, unique=True)
    intent_id = models.CharField(max_length=100, null=True, blank=True)
    training_phrases = JSONField(default=list)
    parent_answer_id = models.IntegerField(null=True, blank=True)
    created_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.question_id)


class Answer(Model):
    class Meta:
        db_table = 'answer'

    answer_id = models.AutoField(db_column='ANSWER ID', primary_key=True)
    question_id = models.ForeignKey(Question, on_delete=models.CASCADE)
    answer_texts = JSONField(default=list)
    additional_message = JSONField(default=dict)
    created_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.answer_id)


class Entity(models.Model):
    class Meta:
        db_table = 'entity'

    entity_id = models.AutoField(db_column='ENTITY ID', primary_key=True)
    entity_name = models.CharField(max_length=50, unique=True)
    entity_type_id = models.CharField(max_length=100, null=True, blank=True)
    created_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.entity_id)


class EntityValue(Model):
    class Meta:
        db_table = 'entity_value'

    entity_id = models.ForeignKey(Entity, on_delete=models.CASCADE)
    value = models.CharField(max_length=50)
    synonyms = JSONField(default=list)
    created_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.id)
