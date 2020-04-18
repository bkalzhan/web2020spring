from django.db import models

class Company(models.Model):
    name = models.CharField(max_length=50)
    # description = models.TextField(default='')
    # city = models.CharField(max_length=50)
    # address = models.TextField()

    class Meta:
        verbose_name = 'Company'
        verbose_name_plural = 'Companies'

    def company_to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            # 'description': self.description,
            # 'city': self.city,
            # 'address': self.address
        }

class Vacancy(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(default="")
    salary = models.FloatField()
    company = models.ForeignKey(Company, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Vacancy'
        verbose_name_plural = 'Vacanies'

    def __str__(self):
        return f'Vacancy id={self.id}, name={self.name}'

    def vacancy_to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description':self.description,
            'salary': self.salary,
            'company': self.company.company_to_json()
        }