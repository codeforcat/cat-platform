from django.db import models
from django_mysql.models import JSONField, Model


class Question(Model):
    class Meta:
        db_table = 'question'

    question_id = models.AutoField(db_column='QUESTION ID', primary_key=True)
    question_name = models.CharField(max_length=100, unique=True)
    intent_id = models.CharField(max_length=100, null=True, blank=True)
    parent_answer_id = models.IntegerField(null=True, blank=True)
    entities = JSONField(default=dict, null=True, blank=True)
    additional_state = models.CharField(max_length=20, default='none')
    additional_message = JSONField(default=dict, null=True, blank=True)
    created_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.question_name


class Phrase(models.Model):
    class Meta:
        db_table = 'phrase'

    phrase_id = models.AutoField(db_column='PHRASE ID', primary_key=True)
    question_id = models.ForeignKey(Question, on_delete=models.CASCADE, related_name='phrase')
    phrase_temp_id = models.IntegerField(null=True, blank=True)
    phrase_text = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.phrase_text


class Answer(models.Model):
    class Meta:
        db_table = 'answer'

    answer_id = models.AutoField(db_column='ANSWER ID', primary_key=True)
    question_id = models.ForeignKey(Question, on_delete=models.CASCADE, related_name='answer')
    answer_text = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.answer_text


class Entity(models.Model):
    class Meta:
        db_table = 'entity'

    entity_id = models.AutoField(db_column='ENTITY ID', primary_key=True)
    entity_name = models.CharField(max_length=50, unique=True)
    entity_type_id = models.CharField(max_length=100, null=True, blank=True)
    created_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.entity_name


class EntityValue(models.Model):
    class Meta:
        db_table = 'entity_value'

    entity_value_id = models.AutoField(db_column='ENTITY VALUE ID', primary_key=True)
    entity_id = models.ForeignKey(Entity, on_delete=models.CASCADE, related_name='entity_value')
    value_temp_id = models.IntegerField(null=True, blank=True)
    value_text = models.CharField(max_length=50, null=True, blank=True)
    created_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.value


class Synonym(models.Model):
    class Meta:
        db_table = 'synonym'

    synonym_id = models.AutoField(db_column='SYNONYM ID', primary_key=True)
    entity_value_id = models.ForeignKey(EntityValue, on_delete=models.CASCADE, related_name='synonym')
    value_temp_id = models.IntegerField(null=True, blank=True)
    synonym_temp_id = models.IntegerField(null=True, blank=True)
    synonym_text = models.CharField(max_length=50, null=True, blank=True)
    created_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.synonym_text
