package api.Back_End.model;

import jakarta.persistence.*;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import java.util.List;

@Entity
@Table(name = "Cities")
public class City {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "city_id")
    private int city_id;

    private String city_name;

    @OneToMany(mappedBy = "city")
    @JsonManagedReference
    private List<School> schools;


    public int getCity_id() { return city_id; }

    public void setCity_id(int city_id) { this.city_id = city_id; }

    public String getCity_name() { return city_name; }

    public void setCity_name(String city_name) { this.city_name = city_name; }

    public List<School> getSchools() { return schools; }

    public void setSchools(List<School> schools) { this.schools = schools; }
}