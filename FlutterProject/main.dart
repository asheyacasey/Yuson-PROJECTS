// ignore_for_file: prefer_const_literals_to_create_immutables, prefer_const_constructors

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:google_fonts/google_fonts.dart';

void main() {
  runApp(MaterialApp(
    debugShowCheckedModeBanner: false,
    home: HomePage(),

  ));
}

class HomePage extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return Scaffold(
      body: SafeArea(
        child: Container(
           width: double.infinity,
           height: MediaQuery.of(context).size.height,
           padding: EdgeInsets.symmetric(horizontal: 30, vertical: 50),
           child: Column(
            children: <Widget>[

              Row (
                  children: <Widget>[

                    Icon(FontAwesomeIcons.coffee, size: 28, color: Colors.deepPurpleAccent,),
                    Text("   Welcome!",  style: GoogleFonts.lato(
                    textStyle: TextStyle(
                      fontWeight: FontWeight.bold,
                      fontSize: 28,
                      letterSpacing: .5,
                    ), ), ),

                  ]
              ),

           Container(
                margin: EdgeInsets.symmetric(vertical: 40),
                height: MediaQuery.of(context).size.height / 3,
                decoration: BoxDecoration(
                  image: DecorationImage(
                    image: AssetImage("assets/pale-coffee-break.png")
                  )
                ),
              ),

              //Login Button
              Column (
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: <Widget>[
                  MaterialButton(

                    minWidth: double.infinity,
                    height: 60,
                    onPressed: () {},
                    shape: RoundedRectangleBorder
                  (
                      side: BorderSide(
                        color: Colors.deepPurpleAccent
                      ),
                        borderRadius: BorderRadius.circular(29)
                    ),
                    child: Text(
                      "Sign In",
                      style: GoogleFonts.lato(
                      textStyle: TextStyle(
                        fontWeight: FontWeight.w600,
                        fontSize: 18
                      ),
                     ),
                    ),
                  ),
                ],
              ),
              //SignUpButton
              SizedBox(height:20),
              MaterialButton(
                minWidth: double.infinity,
                height: 60,
                onPressed: () {},
                color: Colors.deepPurpleAccent,
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(29)
                ),
                child: Text(
                  "Register",
                  style: GoogleFonts.lato(
                  textStyle: TextStyle(
                    color:Colors.white,
                    fontWeight: FontWeight.w600,
                    fontSize: 18
                     ),
                  ),
                ),
              )

            ],


          ),
        ),
      ),

    );
  }


}

