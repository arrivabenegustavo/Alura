from datetime import datetime

class Data:
    def __init__(self):
        self.momento_cadastro = datetime.today()
     
    def __str__(self):
        return self.formata() 
        
    def mes_cadastro(self):
        meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril',
                'Maio', 'Junho', 'Julho', 'Agosto',
                'Setembro', 'Outubro', 'Novembro', 'Dezembro']
                
        mes = self.momento_cadastro.month -1
        return meses[mes]
    
    def dia_semana(self):
        dias = ['Segunda-Feira', 'Terça-Feira', 'Quarta-Feira',
                'Quinta-Feira','Sexta-Feira', 'Sabado', 'Domingo']
        
        dia = self.momento_cadastro.weekday()
        return dias[dia]
    
    def formata(self):
        data_formatada = self.momento_cadastro.strftime('%d/%m/%Y %H:%M')
        return data_formatada
