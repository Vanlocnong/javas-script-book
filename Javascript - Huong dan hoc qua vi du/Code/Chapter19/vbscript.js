<%
dim isbn
isbn=Request.QueryString("isbn")
If isbn<>"" Then
    If isbn=="9780735624498" Then
       Response.Write("JavaScript Step by Step")
    End If
End If
%> 
