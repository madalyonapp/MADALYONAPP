//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace apiTry.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Read_Questions_Table
    {
        public int read_questions_id { get; set; }
        public Nullable<int> user_id { get; set; }
        public Nullable<int> read_questions_from_id { get; set; }
        public string read_questions_message { get; set; }
        public Nullable<System.DateTime> read_questions_date { get; set; }
        public string read_answers_message { get; set; }
        public Nullable<System.DateTime> read_answers_date { get; set; }
    
        public virtual User_Table User_Table { get; set; }
    }
}
