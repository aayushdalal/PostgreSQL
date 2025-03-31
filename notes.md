WORKING ON PSQL(postgress sql): open the psql, now in server means on where which we want to run the database by default its local host but we can also change it then we open the database , speccify the database name then we specify the port , defualt port is 5432 only ,then we give username , default only ,now rememeber password and enter password
    
    *all commands in postgressql must end with ; 

    *postgress is not case sensitive but its convention defualt postgress sql commands are capital and our named things are small letters

    *if you do any error then instead of = , - sing will be dsiplayed if you want to go back, press ctrl+C

    *semicolon is neccessary for crud and other commands

    *your database names cant contain - in them but still if we wanna give hypen then put db name in string like quotes " db-name"

     now it will show "postgress=#" means we are standinng on postgress database
     *now to check which wich database we have : type command:  \l   ,it show all the database avaliable ,to see al tables we have:  \dt  
     it shows all the tables avaliable in db

     *TO swtich database : \c nameofdb
     
     *to create db: CREATE DATABASE "dbname";
     
        //SERIAL GIVES THE UNIQUE ID AND AUTO INCREMENTS THE ID , TIMESTAMPT MEANS current time return date year and month but if you also want the current time at which user was created so write 
        TIMESTAMP WTH TIME ZONE DEFAULT CURRENT_TIMESTAMP , its create the timestapm

    *to crete table: CREATE TABLE tablenamePLURAL (
        //define shemce of this table here
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(250) UNIQUE NOT NULL,
        date TIMESTAMP ,
        <!-- if you need current time as well then: -->
        date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );

    *TO see ,show the schema of any table : \d tablename

    *to insert values : // as id and date have default values we dont need to provie them explicitly
                       INSERT INTO tablename(username,email)
                       VALUES
                       ('sam','sam@gmail.com',
                       'aayush,'aayush@gmail.com);
     
    *to read any entry , see all enteries , tuples:
                        SELECT * FROM tablename;
    
    *to update any entry ://we can use and ,or in where condition
                      UPDATE tablename
                      SET username="anish", email="anish@gmail.com
                      WHERE email="aayush@gmail.com AND username="aayush" ;
    *to delete any entery :
                      DELETE FROM tablename WHERE 
                      id='2' OR email='sam@gmail.com' OR username='anish';

    *TO DROP DATABASE:
          <!-- VERYY IMP: CANT DROP THE CURENT BASE WE ARE WROKING ON  -->
            
            DROP DATABASE "dbname";

TO RUN POSTGRESS ON NODEJS INSTALL PAKCAGE PG : npm i pg,  it is a orm

 //we are writing $1 and $2 in INSERT values because to save ourself from sql injection , sql injection is an attack in which our data can be breached from query we send, so to prevent data breach we send values in $1 and $2 to prevent sql injection

                       